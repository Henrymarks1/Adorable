import { anthropic } from "@ai-sdk/anthropic";

export const ANTHROPIC_MODEL = anthropic("claude-3-7-sonnet-20250219");

// For testing/development - much cheaper and faster
export const ANTHROPIC_MODEL_LITE = anthropic("claude-3-5-haiku-20241022");
