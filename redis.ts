import Redis from "ioredis";

/*connecting to redis database */
const redis = new Redis(process.env.REDIS_URL!);

export default redis;
