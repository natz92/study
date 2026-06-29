import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 4000);
  const corsOrigin = process.env.CORS_ORIGIN?.split(",").map((origin) =>
    origin.trim(),
  ) ?? ["http://localhost:3000", "http://localhost:3001"];

  app.enableCors({
    origin: corsOrigin,
  });

  await app.listen(port);
}

void bootstrap();
