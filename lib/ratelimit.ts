import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import redis from "@/database/redis";

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(5, "30s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;