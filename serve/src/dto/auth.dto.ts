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

export class LoginDTO {
  @Rule(RuleType.string().email().required().max(30).min(6))
  email: string;

  @Rule(RuleType.string().required().max(20).min(2))
  nickname: string;

  @Rule(RuleType.string().required().max(16).min(6))
  password: string;

  @Rule(RuleType.string().length(4))
  code: string;

  @Rule(RuleType.boolean())
  register: boolean;
}
