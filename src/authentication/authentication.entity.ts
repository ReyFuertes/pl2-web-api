import { BaseEntity, PrimaryGeneratedColumn, Generated, Column, Entity, Unique, OneToMany, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
@Unique(['login'])
export class Accounts extends BaseEntity {
  @Column({ nullable: true, primary: true })
  login: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  token: string;
}
