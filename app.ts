// TypeScript: Discriminated Unions & Exhaustive Checks (Day 33)
// Day 33 - Type-Safe Application Development (Intermediate)

console.log("=== TypeScript: Discriminated Unions & Exhaustive Checks (Day 33) ===");

interface MetricPayload {
  day: number;
  topic: string;
  timestamp: string;
  status: "active" | "completed";
}

class PipelineEngine {
  private history: MetricPayload[] = [];

  constructor(private name: string) {}

  public record(metric: MetricPayload): void {
    this.history.push(metric);
    console.log(`[${this.name}] Recorded: ${metric.topic} (Status: ${metric.status})`);
  }

  public getSummary() {
    return {
      totalEntries: this.history.length,
      latest: this.history[this.history.length - 1]
    };
  }
}

const engine = new PipelineEngine("union-discriminated");
engine.record({
  day: 33,
  topic: "TypeScript: Discriminated Unions & Exhaustive Checks (Day 33)",
  timestamp: new Date().toISOString(),
  status: "active"
});

console.log("Telemetry Summary:", engine.getSummary());
