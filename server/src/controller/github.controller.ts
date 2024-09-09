import { Controller, Get, Inject } from '@midwayjs/core';
import { GetCommitListDTO } from '../dto/github.dto';
import { GithubService } from '../service/github.service';

@Controller('/api/github')
export class HomeController {
  @Inject()
  github: GithubService;

  @Get('/commit-list')
  async getCommitList(params: GetCommitListDTO): Promise<string> {
    const list = await this.github.getCommitList(
      params.owner,
      params.repo,
      params.page,
      params.per_page
    );
    return list;
  }
}
