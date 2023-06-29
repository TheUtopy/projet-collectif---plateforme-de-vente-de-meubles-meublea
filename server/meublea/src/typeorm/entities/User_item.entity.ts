import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User.entity';
import { ShopItem } from './shop_item.entity';

@Entity({ name: `user_item` })
export class UserItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ type: `double` })
  price: number;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 45 })
  type: string;

  @Column({ type: `blob` })
  picture: Buffer;

  @Column({ length: 45 })
  dimensions: string;

  @Column({ length: 45 })
  colour: string;

  @Column({ length: 45 })
  material: string;

  @Column({ length: 45 })
  state: string;

  @Column({ name: `user_id` })
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: `user_id` })
  user: User;

  @ManyToOne(() => ShopItem)
  @JoinColumn({ name: `shop_item_id` })
  shop_item: ShopItem;
}
