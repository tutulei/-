class Resource{
    /**
     * 志愿者总人数 volunteers count
     */
    public totalVC: number;
    /**
     * 可用志愿者人数 volunteers count
     */
    public VC: number;
    /**
     * 可布置路障总条数 Roadblock count
     */
    public totalRC: number;
    /**
     * 可布置路障条数 Roadblock count
     *  作用： 封堵路口
     */
    public RC: number;
    /**
     * 区域巡逻机器总数machine count
     *  作用：减少事故发生率
     */
     public totalMC: number;
    /**
     * 可用区域巡逻机器数machine count
     *  作用：减少事故发生率
     */
     public MC: number;
    /**
     * 可用武装警卫数Guard count
     */
    public totalGC: number;
    /**
     * 武装警卫总数Guard count
     */
    public GC: number;
    /**
     * 可支配交通管理总时间（比如修改路口可行驶区域 单位分钟）traffic time
     *  作用：阻断交通、外来人员
     */
    public totalTT: number;
    /**
     * 可支配交通管理剩余时间（比如修改路口可行驶区域 单位分钟）traffic time
     *  作用：阻断交通、外来人员
     */ 
    public TT: number;
    
}