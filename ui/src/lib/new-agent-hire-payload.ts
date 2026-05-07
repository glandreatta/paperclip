import type { CreateConfigValues } from "../components/AgentConfigForm";
import { buildNewAgentRuntimeConfig } from "./new-agent-runtime-config";

export function buildNewAgentHirePayload(input: {
  name: string;
  effectiveRole: string;
  title?: string;
  reportsTo?: string | null;
  selectedSkillKeys?: string[];
  instructions?: string;
  configValues: CreateConfigValues;
  adapterConfig: Record<string, unknown>;
}) {
  const {
    name,
    effectiveRole,
    title,
    reportsTo,
    selectedSkillKeys = [],
    instructions,
    configValues,
    adapterConfig,
  } = input;

  const sanitizedAdapterConfig = { ...adapterConfig };
  delete sanitizedAdapterConfig.promptTemplate;
  delete sanitizedAdapterConfig.bootstrapPromptTemplate;

  const instructionsContent = instructions?.trim();

  return {
    name: name.trim(),
    role: effectiveRole,
    ...(title?.trim() ? { title: title.trim() } : {}),
    ...(reportsTo ? { reportsTo } : {}),
    ...(selectedSkillKeys.length > 0 ? { desiredSkills: selectedSkillKeys } : {}),
    ...(instructionsContent ? { instructionsBundle: { files: { "AGENTS.md": instructionsContent } } } : {}),
    adapterType: configValues.adapterType,
    defaultEnvironmentId: configValues.defaultEnvironmentId ?? null,
    adapterConfig: sanitizedAdapterConfig,
    runtimeConfig: buildNewAgentRuntimeConfig({
      heartbeatEnabled: configValues.heartbeatEnabled,
      intervalSec: configValues.intervalSec,
    }),
    budgetMonthlyCents: 0,
  };
}
