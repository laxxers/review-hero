import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '~/core/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @Index()
  @Column()
  email: string;

  @Column({ nullable: true })
  passwordHash: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;
}
