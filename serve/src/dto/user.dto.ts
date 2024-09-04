import { Rule, RuleType } from '@midwayjs/validate';

export class UserDTO {
  @Rule(RuleType.number().required())
  id: number;

  @Rule(RuleType.string().required())
  firstName: string;

  @Rule(RuleType.string().max(10))
  lastName: string;

  @Rule(RuleType.number().max(60))
  age: number;
}

export class CheckRegisterDTO {
  @Rule(RuleType.string().email().required().max(30).min(6))
  email: string;
}
