export interface Destination {
  name: string;
  city: string;
  tags: string[];
  description: string;
  location: string;
  link?: string;
}

export const destinations: Destination[] = [
  {
    name: "新车间",
    city: "上海",
    tags: ["创客空间"],
    description: "上海最早的创客空间之一，为创客们提供工作坊和社区支持。",
    location: "上海市",
    link: "https://mp.weixin.qq.com/s/cWelX3Ygnk_zbC5bDO29tw"
  },
  {
    name: "二十河",
    city: "上海",
    tags: ["艺术创作"],
    description: "位于崇明区的艺术创作空间，为艺术家提供创作和展示的平台。",
    location: "上海市崇明区竖新镇仙桥村张涨港路",
    link: "https://mp.weixin.qq.com/s/KIaGV6fEazoh6tFW8358ug"
  },
  {
    name: "Bottledream basecamp",
    city: "上海",
    tags: ["节点", "社区空间"],
    description: "BottleDream的办公地和对外开放空间，定位是向善创造力青年社区。",
    location: "上海利西路152号"
  },
  {
    name: "新华·社区营造中心",
    city: "上海",
    tags: ["社区营造", "节点"],
    description: "由上海市新华路街道引领并发起，社会组织大鱼营造具体负责筹款、运营并开展社造活动的共创空间。",
    location: "上海市长宁区新华路345弄4号楼",
    link: "https://mp.weixin.qq.com/s/g4OIig3mqy2XusA1MxXk5w"
  },
  {
    name: "706上海",
    city: "上海",
    tags: ["共居", "青年空间"],
    description: "青年共居空间，为年轻人提供居住和交流的平台。",
    location: "上海市",
    link: "https://mp.weixin.qq.com/s/Dj0nnNrB1ZycS3bTXc07gA"
  },
  {
    name: "明室书房",
    city: "上海",
    tags: ["文化空间"],
    description: "明室升级为2.0后也已经走过了十个年头，它不仅仅是一家私人书房同时也是上海最为活跃的泛先锋派与实验音乐场景之一。",
    location: "绍兴路94号二楼"
  },
  {
    name: "重影客厅Double Lounge",
    city: "上海",
    tags: ["公共空间"],
    description: "一个集阅读、聚会、公共讨论、小型艺术展演等功能的公共空间。",
    location: "上海市国定路335号杨浦科技创业中心2号楼801室"
  },
  {
    name: "街垒Bunker",
    city: "上海",
    tags: ["文化空间"],
    description: "一个充满活力的文化空间。",
    location: "乌鲁木齐北路190号",
    link: "https://mp.weixin.qq.com/s/Yq3kt3RdRs-bc9IGDgO4kQ"
  },
  {
    name: "临时公园",
    city: "上海",
    tags: ["艺术空间", "社区"],
    description: "临时公园是一个性别友好创造性社群空间，由流动/艺术家（及其他）青年及青少年自主共治。",
    location: "上海市浦东新区"
  },
  {
    name: "NICE Commune 好公社",
    city: "上海",
    tags: ["社区空间"],
    description: "一个文化交流社区空间，结合外部社群的新鲜食物与社区原住民的生活文化。",
    location: "上海市杨浦区四平路1024号1幢1层"
  },
  {
    name: "安福大厅",
    city: "上海",
    tags: ["创意空间"],
    description: "法租界创意客厅，异能青年秘密基地，带你探索多元生活方式。",
    location: "上海市宝山区蕴川路6号智慧湾科创园C区10号楼116-118"
  },
  {
    name: "沁岚空间",
    city: "上海",
    tags: ["文化空间"],
    description: "沁岚空间是一个自由人的自由联盟，以书为媒，倡导有趣，有料，可持续的生活方式。",
    location: "草场街天源步行街沁岚空间"
  },
  {
    name: "闲下来合作社",
    city: "上海",
    tags: ["社区营造"],
    description: "社区营造空间，促进邻里交流和社区发展。",
    location: "上海长宁区仙霞路700弄25号"
  },
  {
    name: "故事商店",
    city: "上海",
    tags: ["社区营造"],
    description: "社区故事收集和分享的空间。",
    location: "长宁区愚园路1046号"
  },
  {
    name: "三明治文化中心",
    city: "上海",
    tags: ["文化空间"],
    description: "作为全国最大的写作社群三明治，这里汇聚了超过30万粉丝，他们来自天南海北，职业五花八门。",
    location: "凯旋路1398号 IM Shanghai T11-2F"
  },
  {
    name: "鲸字号·HA城市艺术会客厅",
    city: "上海",
    tags: ["艺术空间"],
    description: "新的鲸字号书店将推荐与分享关于艺术、设计、插画、绘本、美育等主题领域的读物。",
    location: "上海市"
  },
  {
    name: "别处·艺术共享空间",
    city: "上海",
    tags: ["艺术空间"],
    description: "别处·艺术共享空间，致力于成为开放式人文艺术社交聚集地。",
    location: "襄阳南路"
  },
  {
    name: "娜娜的大房子",
    city: "上海",
    tags: ["社区空间"],
    description: "娜娜的大房子是联结人与人、服务人内在情感与生命的公共空间，是守护爱与真实的精神社区。",
    location: "上海市静安区昌化路665号"
  },
  {
    name: "无碍酒馆",
    city: "上海",
    tags: ["酒馆", "残障友好"],
    description: "残障人士友好的酒馆空间。",
    location: "长宁区新华路365弄6号楼108铺"
  },
  {
    name: "漕泾数字游民国际村",
    city: "上海",
    tags: ["数字游民友好"],
    description: "为数字游民提供工作和生活空间。",
    location: "上海市",
    link: "https://mp.weixin.qq.com/s/oOJHFW_C7IQtSp8l05CXNA"
  }
]; 