/**
 * Browser test bridge contract.
 *
 * The runtime evidence contract captures state through the global
 * `__SETFARM_TEST_BRIDGE__` (action invocation method `invokeAction`) and the
 * scenario mode global `__SETFARM_SCENARIO_MODE__`.
 */

export const TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";
export const SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";
export const SCENARIO_MODE_VALUE = "manual";

export interface ActionInvocationResult {
  ok: boolean;
  error?: string;
}

export interface TestBridge {
  readonly states: Record<string, unknown>;
  invokeAction(actionRef: string, payload?: unknown): ActionInvocationResult;
}

export function installTestBridge(
  statesProvider: () => Record<string, unknown>,
  invokeAction: (actionRef: string, payload?: unknown) => ActionInvocationResult,
): TestBridge {
  const bridge: TestBridge = {
    get states(): Record<string, unknown> {
      return statesProvider();
    },
    invokeAction,
  };

  if (typeof window !== "undefined") {
    const target = window as unknown as Record<string, unknown>;
    target[TEST_BRIDGE_GLOBAL] = bridge;
    target[SCENARIO_MODE_GLOBAL] = SCENARIO_MODE_VALUE;
  }

  return bridge;
}
