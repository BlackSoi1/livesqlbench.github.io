import fs from "fs";
import path from "path";

export interface DataEntry {
  instance_id: string;
  selected_database: string;
  query: string;
  preprocess_sql: string[];
  clean_up_sqls: string[];
  sol_sql: string[];
  external_knowledge: number[];
  test_cases: any[];
  category: string;
  high_level: boolean;
  conditions: {
    decimal: number;
    distinct: boolean;
  };
  amb_user_query: string;
  user_query_ambiguity: {
    critical_ambiguity: Array<{
      term: string;
      sql_snippet: string;
      is_mask: boolean;
      type: string;
    }>;
    non_critical_ambiguity: Array<{
      term: string;
      sql_snippet: string;
      is_mask: boolean;
      type: string;
    }>;
  };
  knowledge_ambiguity: Array<{
    term: string;
    sql_snippet: string;
    is_mask: boolean;
    type: string;
    deleted_knowledge: number;
  }>;
  follow_up?: {
    query: string;
    sol_sql: string;
    external_knowledge: number[];
    type: string;
    test_cases: any[];
    category: string;
  };
}

export interface KnowledgeEntry {
  id: number;
  knowledge: string;
  description: string;
  definition: string;
  type: string;
  children_knowledge: number;
}

// set a new dir for the data
const dataDir = path.join("./data");

export function getDatabases(): string[] {
  return fs
    .readdirSync(dataDir)
    .filter((item: string) =>
      fs.statSync(path.join(dataDir, item)).isDirectory()
    )
    .filter((dir: string) => dir !== ".git");
}

export function readDataFile(dbName: string): DataEntry[] {
  const filePath = path.join(dataDir, dbName, `${dbName}_data.jsonl`);
  const content = fs.readFileSync(filePath, "utf-8");
  return content
    .split("\n")
    .filter((line: string) => line.trim())
    .map((line: string) => JSON.parse(line));
}

export function readKnowledgeFile(dbName: string): KnowledgeEntry[] {
  const filePath = path.join(dataDir, dbName, `${dbName}_kb.jsonl`);
  const content = fs.readFileSync(filePath, "utf-8");
  return content
    .split("\n")
    .filter((line: string) => line.trim())
    .map((line: string) => JSON.parse(line));
}

export function readSchemaFile(dbName: string): { dotContent: string } {
  const dotPath = path.join(dataDir, dbName, `public.dot`);

  if (!fs.existsSync(dotPath)) {
    throw new Error("Schema file not found");
  }

  const dotContent = fs.readFileSync(dotPath, "utf-8");
  return { dotContent };
}
