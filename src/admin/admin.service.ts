import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { Repository } from 'typeorm';
// import { InvestmentPlanEntity } from 'src/invest/entities/investmentPlan.entity';
// import { CreateInvestmentPlanDto } from 'src/invest/dto/create-investmentPlan.dto';
// import { InvestService } from 'src/invest/invest.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
  ) {}

  // private investService: InvestService,
  // async findAdminByEmail(email: string): Promise<AdminEntity> {
  //   return await this.adminRepository.findOne({ where: { email } });
  // }

  // async createInvestmentPlan(
  //   data: CreateInvestmentPlanDto,
  // ): Promise<InvestmentPlanEntity> {
  //   return this.investService.createInvestmentPlan(data);
  // }
  // async updateInvestmentPlan(
  //   data: Partial<InvestmentPlanEntity>,
  // ): Promise<InvestmentPlanEntity> {
  //   return this.investService.updateInvestmentPlan(data);
  // }
  // async deleteInvestmentPlan(id: string): Promise<boolean> {
  //   return this.investService.deleteInvestmentPlan(id);
  // }
}
