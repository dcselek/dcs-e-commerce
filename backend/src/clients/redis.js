const Redis = require("ioredis");
const redis = new Redis(`${process.env.REDIS_SET}`);

export default redis;
