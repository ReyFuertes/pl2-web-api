import { BaseEntity, PrimaryGeneratedColumn, Generated, Column, Entity, Unique, OneToMany, JoinColumn, ManyToOne, PrimaryColumn, Index } from "typeorm";

@Entity()
export class Characters extends BaseEntity {
  @Column({ nullable: true, primary: true, name: 'charId' })
  charId: string;

  @Column({ nullable: true, name: 'account_name' })
  account_name: string;

  @Column({ nullable: true, name: 'char_name' })
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

  @Column({ nullable: true, name: 'pvpkills' })
  pvpkills: string;

  @Column({ nullable: true, name: 'pkkills' })
  pkkills: string;
}
