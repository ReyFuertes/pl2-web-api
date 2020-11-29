import { BaseEntity, PrimaryGeneratedColumn, Generated, Column, Entity, Unique, OneToMany, JoinColumn, ManyToOne, PrimaryColumn, Index } from "typeorm";

@Entity()
export class grandboss_data extends BaseEntity {
  @Column({ nullable: true, primary: true, name: 'boss_id' })
  boss_id: string;

  @Column({ nullable: true, name: 'respawn_time' })
  respawn_time: string;
}
