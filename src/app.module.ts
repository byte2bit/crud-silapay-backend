import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProductModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
