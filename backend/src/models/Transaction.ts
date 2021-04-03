import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('transaction')
export default class Transaction {

  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('varchar')
  title: string;

  @Column('varchar')
  type: string;

  @Column('numeric')
  amount: number;

  @Column('varchar',)
  category: string;

  @Column('timestamptz', { name: 'date_payment' })
  datePayment: Date;
}