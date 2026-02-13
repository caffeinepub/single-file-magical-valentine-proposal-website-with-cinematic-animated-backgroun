import type { backendInterface } from '../backend';
import { createActorWithConfig } from '../config';

let actorInstance: backendInterface | null = null;

async function getActor(): Promise<backendInterface> {
  if (actorInstance) {
    return actorInstance;
  }

  // Use the project's standard actor creation method
  actorInstance = await createActorWithConfig();
  return actorInstance;
}

export async function recordResponse(weddingAnswer: string, bobaAnswer: string): Promise<bigint> {
  const actor = await getActor();
  return actor.recordResponse(weddingAnswer, bobaAnswer);
}

export async function isAdmin(password: string): Promise<boolean> {
  const actor = await getActor();
  return actor.isAdmin(password);
}

export async function getAllResponses(adminPassword: string): Promise<Array<{ weddingAnswer: string; bobaAnswer: string; timestamp: bigint }> | null> {
  const actor = await getActor();
  return actor.getAllResponses(adminPassword);
}
