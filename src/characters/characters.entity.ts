import { BaseEntity, PrimaryGeneratedColumn, Generated, Column, Entity, Unique, OneToMany, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Characters extends BaseEntity {
  @Column({ nullable: true, primary: true })
  account_name: string;

  @Column({ nullable: true })
  char_name: string;

  @Column({ nullable: true, name: 'level' })
  level: string;

  @Column({ nullable: true, name: 'maxHp' })
  maxHp: string;

  @Column({ nullable: true, name: 'curHp' })
  curHp: string;

  @Column({ nullable: true, name: 'maxCp' })
  maxCp: string;

  @Column({ nullable: true, name: 'maxMp' })
  maxMp: string;

  @Column({ nullable: true, name: 'curMp' })
  curMp: string;

  @Column({ nullable: true, name: 'exp' })
  exp: string;

  @Column({ nullable: true, name: 'onlinetime' })
  onlinetime: string;
}
