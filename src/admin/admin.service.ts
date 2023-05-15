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

}
