import { AdminEntity } from './entities/admin.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private adminRepository;
    constructor(adminRepository: Repository<AdminEntity>);
}
