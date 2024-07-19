# 【技术方案】XXXXXX

> 以下是根据过往踩坑case总结出来，希望大家养成以下几个条件反射，并在技术方案和编码时能反射式的留意到这些点：
>
> 1. 涉及请求的要考虑重试，涉及重试的**必须要有次数控制**（加退避策略，使用已有库即可）
> 2. 涉及循环（特别是嵌套循环）、数组操作，都必须要考虑大数据量下的性能
> 3. 涉及用户输入或操作产生的，都要**考虑上限**（总容量和单个容量）
> 4. 涉及枚举、结构变更、参数类型改变、接口（前后端客户端）等，考虑兼容性，**避免改已有协议**，采用新增方式（一定时间后淘汰旧协议）
> 5. 涉及数据转移，都必须要考虑高级权限下是否有影响
> 6. 涉及分批，**考虑一致性**问题
> 7. 代码要考虑异常场景，涉及异常都有对应的处理方式和监控，通过单测/工具触发并观察结果是否符合预期，埋点监控

# 变更记录

| 时间      | 变更原因或内容 | 负责人  |
| --------- | -------------- | ------- |
| 2024/7/19 | 初稿           | SomeOne |
| 2024/7/19 | 补充可选方案   | SomeOne |

## 评审记录

## 评审结论（必选）

暂时无法在飞书文档外展示此内容

暂时无法在飞书文档外展示此内容

## 评审todo

- [X] 这个
- [X] 这个
- [X] 这个
- [X] 这个
- [X] 这个
- [X] 这个

## 需求信息

|        |         |            |
| ------ | ------- | ---------- |
| 角色   | 对接人  | 文档       |
| PM     | SomeOne | 需求文档： |
| UX     | SomeOne | 设计稿：   |
| PLA    | SomeOne | 埋点设计： |
| 前端   | SomeOne | 技术方案： |
| 后端   | SomeOne | 技术方案： |
| Mobile | SomeOne | 技术方案： |

# 需求概述

## 术语解释

- **术语1**: 术语1解释

- **术语2**: 术语2解释

- **术语n**: 术语n解释

> 模板说明：
>
> 本小节的目的是让大家有共同语言，便于沟通，避免混淆。
>
> - 术语说明里,注意受众上下文。
>
> - 大家都了解的术语不用赘述，顾名思义的术语不用赘述。
>
> - 主要说明几个可能受众不理解，或者容易混淆的部分。

## 需求整理

本设计主要满足以下需求:

- 需求点1

- 需求点2

- 需求点n

> 模板说明:
>
> 本小节的目的是把需求点罗列出来，需求点需要从用户出发，**能为用户带来价值**。
>
> 不能为用户带来价值的需求点，设计不予考虑，**避免过度设计**。
>
> 1. 用户可以是最终用户，也可以是相关外部系统(相对于自己系统视角来说)。
>
> 2. 避免场景遗漏，有些需求点的关键边界(影响到设计方案选择)可以写进来。
>
> 需求整理部分，不要放需求合理性解释。合理性解释是产品文档的职责。

# 竞品分析

> 分析google spread, 石墨, 腾讯文档, airtable, notion, coda 等竞品相关功能的实现逻辑

交互设计上：深度挖掘竞品的实现逻辑

性能上：通过 performance 关注竞品实现的性能

# 设计目标

> 思考长期价值，不一定本期实现
>
> 注意数据结构的长期适用性，能够一定程度兼容未来场景

# 解决方案

> - 接口实现、结构及其层次关系、流程图/时序图说明
>
> - 提供多个方案说明优劣，会上加以讨论
>
> - 在设计方案的时候要多加考虑异步时序问题。表格组的经验中，有不少因为没有处理好异步时序逻辑产生的设计问题。（考虑多浏览器 tab，多 sheet/st tab 切换，数据竞争的情况）
>
>   - good case [sheet离线存储技术文档](https://bytedance.feishu.cn/docs/doccnjicFvhynUuMW4WZx7)
>
>   - bad case [[bugfix] 关于smartable@sheet canvas 异常的原因分析与解决方案](https://bytedance.feishu.cn/docs/doccnxdRM2ON6xKQWDzA4mAYmbe)

## 方案一

xxx

## 方案二

xxx

# 性能影响

> - 在大量数据下的表现，比如1万行
>
> - 是否引入了大包，导致加载性能变慢（**有卡点，会导致合不了码，****docx****对首屏影响小于1****kb****，base对首屏影响小于10kb，mobile整体小于50KB**）
>
> - 是否会导致doc/sheet的加载变慢
>
> - 是否会影响TTV/TTU
>
> - 是否需要增加性能上的监控

# 异常处理

> 特别在自我review代码的时候留意以下case是否有做到
>
> - 逻辑上的代码会有哪些异常可能会出现
>
> - 各种异常边界是否考虑到
>
> - 异常处理是否有打点，是否可靠
>
> - 相关业务或技术看板是否有建立

# 兼容性

> - 是否有新增的action、新的数据结构、新的接口，在FxDB或ABase下是否都要处理
>
> - 修改数据结构时要保证对旧版本的兼容性，避免热更
>
> - 修改 SDK 对外 API 时候，保证对 bear-bitable/bear-web/移动端/Node 兼容
>
> - 即使要热更需要注意尽量覆盖，而且有专有部署的问题 [专版客户端强制升级方案](https://bytedance.feishu.cn/docs/doccninfhypRPWEsyxz6q19BeCe)
>
> - 旧版本打开的表现预期是怎样的**（一定不能阻塞旧版本的主路径）**，尤其需要考虑只支持 Abase 的端打开 FxDB 时候的表现
>
> - 移动端是否有对应的处理方案
>
> - 确认清楚前端、后端、Node、客户端上车版本，确保没兼容性问题
>
> - 确认 FG 范围和计划，在代码没全量前（包括前端、客户端等）谨慎扩大灰度范围
>
> - 确保 QA 测试覆盖所有可能存在兼容性的场景
>
> - 对前/后端接口返有语义修改的必须用新接口或者加参数区分，保证旧接口的语义
>
> - 新增三方包需要考虑浏览器兼容问题，防止老版本浏览器用户页面崩溃[新增第三方包注意事项](https://bytedance.larkoffice.com/docx/XNDwdfXFDojVpsx7hBtcMOyxnvc)

# Core 影响

> 如果方案中涉及 model、sync、command 等模块的改动，需要拉上 Core 同学一起评估 @徐礼杰 @崔伟
>
> 新需求都应该考虑是否需要兼容旧文档（ABase）& FxDB 文档 - 必须
>
> 给视图层提供的接口需要考虑按需下能否支持 - 最好
>
> 如果方案中涉及字段 cellValueToGroupKey 方法改动，需要同步 FxDB 服务端图表计算 @许启鹏

# Node 影响

> 由于 Node 和前端复用同一套 bitable-sdk 代码，上线时要考虑改动对 Node 是否有影响
>
> 如：新增 Action，修改规则

> - **确认对** **Node** **业务场景的影响（不清楚影响可以找 Node 同学确认** **[Node 服务模块 owner](https://bytedance.feishu.cn/wiki/wikcnQe018oGGkdnPlYGBTJ9h5d#doxcnmGeqKo68yWaimEPAASLChb)****）**
>
>   - **千人一面（Apply、脏区搜集、****异步****计算）**
>
>   - **高级权限**
>
>   - **历史记录**
>
>   - **Automation**
>
>   - **仪表盘**
>
>   - **导入导出**
>
>   - **表单**
>
>   - **Open API**
>
>   - **是否需要新的监控，确保** **Node 监控****覆盖到对应的业务场景**
>
>   - **确保****自动化测试****能覆盖到** **Node** **的业务场景**
>
>   - **上线过程中是否可回滚**
>
> - Node Apply（代替 Go Apply）
>
>   - 新增 Action、修改 Action 逻辑，新增字段，修改字段，修改其他Snapshot结构需要合入 Apply
>
>   - 公式相关改动会有影响，新增函数，修改计算规则等
>
> - Node 导出，Node Form, Node Command
>
>   - Apply要更新的时候这个也一定要更新
>
>   - 公式相关改动会有影响，新增函数，修改计算规则等
>
> - Node openAPI
>
>   - 公式相关改动会有影响，修改计算规则等
>
> - Node SSR服务
>
>   - 改变应用状态时可能会影响SSR的导出时机

# 成本影响

> - 若涉及新增埋点、资源扩容等改动，参照 [技术方案常见组件选型-成本参考](https://bytedance.feishu.cn/wiki/FuXKwfqE7i6UwYkffWXcpkLlnGZ) 评估对成本影响
>
>   - 着重关注研发性能埋点设计

![](https://bytedance.larkoffice.com/space/api/box/stream/download/asynccode/?code=YzEyZmU4MWYxZDU5OTBmMjRmMDVjZjVmMjQyZDUyZTRfdkJsWkZ3UnhzZFJ6TUZkTnVrUVpIVlVZSmZXR2lhMFNfVG9rZW46WjFFRWJtOTlib0F0N0p4U0lyM2NSbmdEbjFiXzE3MjEzNzg5NjA6MTcyMTM4MjU2MF9WNA)

# FxDB & ABase

> 当前新文档基本已经是FxDB文档，但存量还有大量ABase文档，所以需要同时考虑两个场景。
>
> 工作量上注意新需求是否在FxDB和ABase下有不同，可能一些需求在两者下需要不同的人力支持，特别是后端。FxDB可以咨询 @肖密 ；ABase可以咨询 @林士闳

# 跨团队/部门依赖

> 识别需求中是否有如下依赖：
>
> - 部门内其他团队如：Dashboard/Automation/SDK/开放/移动端/OpenAPI等
>
> - 跨部门业务团队如：主端IM/开放平台/Doc/Sheet等
>
> - 中台团队如：前端模板/后端协同/附件Drive/权限等

# 过Checklist

> - 仔细过每一条check list，多思考，有需要补充的在文档内体现出来

[Base 前端技术方案 checklist](https://bytedance.feishu.cn/wiki/wikcnePiRmX2UczubIwgoTvB7Og)

# 安全相关

> - 避免XSS、DDOS、CSRF、日志带敏感数据

[CCM 侧 node/javascript 发版安全 checklist](https://bytedance.feishu.cn/docx/doxcnPE3K3Dvur1csvQ14OjW0Uf)

# 灰度

> - 与产品确认是否要FG（一般新需求都要）
>
> - 自测确认FG有控制该需求的所有表现（包括UI）
>
> - 大的业务或技术需求，有灰度计划的，需要明确出来

# 测试用例（QA同学写，开发Review）

> 补充在[Smartable 测试用例](https://bytedance.feishu.cn/docs/doccneY3vLFrelDvdJEX3M0y3tg) / [Sheet 测试用例](https://bytedance.feishu.cn/wiki/wikcnSIF49knUjjIAnYuD2fwnIf)

# 任务拆解

> 任务拆解了足够细才能使排期更准确，每个任务的估时需要能够自我解释
> 关注合作方排期，保证联调时间充分
> 预留单测的时间
> 正常排期后除以0.7得出规划排期，如果是多人合作，每增加一人再减0.05
> 把拆分出来的任务列入meego或甘特图

什么是超出预期

多数情况下是：长线思维寻找更好的解决方案并且高质量高效率的交付；

除能力外，高效率靠做事方法和平日的积累，高质量靠的是细心，有耐心。

为什么能力够了，投入了精力、时间，却做不出超出预期的事情；做完事情和做好事情在时间投入上不会差很多，但结果天差地别；多付出20%的精力在质量上，经常从外部视角看自己做的事情是否OK，确保交付结果，给自己打上【靠谱】的标签。
