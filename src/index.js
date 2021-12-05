const fastify = require("fastify")({
  logger: true,
});

require("./helpers/mongoose");

const swagger = require("./helpers/swagger");
const productRoutes = require("./routes/product.routes");

fastify.register(require("fastify-swagger"), swagger.options);

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
