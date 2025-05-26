import type { DataEntry, KnowledgeEntry } from "./types";

// Re-export the types
export type { DataEntry, KnowledgeEntry };

// Get the base path for assets in GitHub Pages
export function getBasePath(): string {
  // In development, use empty string (no base path)
  // In production, use the GitHub Pages base path
  return process.env.NODE_ENV === 'production' ? "/livesqlbench.github.io" : "";
}

// 预定义的数据库列表
const DATABASES = [
  "alien",
  "archeology"
];

// 预定义的大数据库列表
const LARGE_DATABASES = ["alien_large", "archeology_large"];

export function getDatabases(): string[] {
  return DATABASES;
}

export function getLargeDatabases(): string[] {
  return LARGE_DATABASES;
}

// Helper function to parse JSONL file
async function parseJSONL(response: Response): Promise<any[]> {
  const text = await response.text();
  return text
    .split('\n')
    .filter(line => line.trim()) // Remove empty lines
    .map(line => JSON.parse(line));
}

export async function readDataFile(dbName: string): Promise<DataEntry[]> {
  try {
    const response = await fetch(
      `${getBasePath()}/data/${dbName}/${dbName}_data.jsonl`
    );
    if (!response.ok) {
      throw new Error(`Failed to load data for ${dbName}`);
    }
    return await parseJSONL(response);
  } catch (error) {
    console.error(`Error loading data for ${dbName}:`, error);
    return [];
  }
}

export async function readKnowledgeFile(
  dbName: string
): Promise<KnowledgeEntry[]> {
  try {
    const response = await fetch(
      `${getBasePath()}/data/${dbName}/${dbName}_kb.jsonl`
    );
    if (!response.ok) {
      throw new Error(`Failed to load knowledge for ${dbName}`);
    }
    return await parseJSONL(response);
  } catch (error) {
    console.error(`Error loading knowledge for ${dbName}:`, error);
    return [];
  }
}

export async function readSchemaFile(dbName: string): Promise<any> {
  try {
    const response = await fetch(
      `${getBasePath()}/data/${dbName}/public.dot`
    );
    if (!response.ok) {
      throw new Error(`Failed to load schema for ${dbName}`);
    }
    const dotContent = await response.text();
    return { dotContent };
  } catch (error) {
    console.error(`Error loading schema for ${dbName}:`, error);
    return null;
  }
}

export async function readKnowledgeMarkdownFile(dbName: string): Promise<string | null> {
  try {
    const response = await fetch(
      `${getBasePath()}/data/${dbName}/${dbName}_kb.md`
    );
    if (!response.ok) {
      throw new Error(`Failed to load knowledge markdown for ${dbName}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading knowledge markdown for ${dbName}:`, error);
    return null;
  }
}
