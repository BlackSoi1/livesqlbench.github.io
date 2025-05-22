import { DataEntry, KnowledgeEntry } from "./types";

// 预定义的数据库列表
const DATABASES = [
  "alien",
  "archeology",
  "basketball",
  "cinema",
  "college",
  "company",
  "concert",
  "covid",
  "flight",
  "game",
  "hospital",
  "library",
  "movie",
  "music",
  "restaurant",
  "school",
  "soccer",
  "university",
];

// 预定义的大数据库列表
const LARGE_DATABASES = ["alien_large", "archeology_large"];

export function getDatabases(): string[] {
  return DATABASES;
}

export function getLargeDatabases(): string[] {
  return LARGE_DATABASES;
}

export async function readDataFile(dbName: string): Promise<DataEntry[]> {
  try {
    const response = await fetch(
      `/livesqlbench.github.io/data/${dbName}/data.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to load data for ${dbName}`);
    }
    return await response.json();
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
      `/livesqlbench.github.io/data/${dbName}/knowledge.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to load knowledge for ${dbName}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading knowledge for ${dbName}:`, error);
    return [];
  }
}

export async function readSchemaFile(dbName: string): Promise<any> {
  try {
    const response = await fetch(
      `/livesqlbench.github.io/data/${dbName}/schema.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to load schema for ${dbName}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading schema for ${dbName}:`, error);
    return null;
  }
}
