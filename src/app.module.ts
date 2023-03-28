import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dilshod1421',
      database: 'products',
      entities: [Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
