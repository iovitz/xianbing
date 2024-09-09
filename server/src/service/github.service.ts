import { App, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { Octokit } from 'octokit';

@Provide()
export class GithubService {
  @App('koa')
  private app: Application;

  private _octokitClient: Octokit;

  get octokitClient() {
    if (!this._octokitClient) {
      this._octokitClient = new Octokit({
        auth: this.app.getConfig('github.token'),
      });
    }
    return this._octokitClient;
  }

  getCommitList(owner: string, repo: string, per_page: number, page: number) {
    return this.octokitClient
      .request('GET /repos/{owner}/{repo}/commits', {
        owner,
        repo,
        per_page,
        page,
      })
      .then(({ data }) => data);
  }
}
