import type { backendInterface } from "./backend.d";
import { useActor } from "./hooks/useActor";

export function useBackend(): backendInterface | null {
  const { actor } = useActor();
  return actor as backendInterface | null;
}
