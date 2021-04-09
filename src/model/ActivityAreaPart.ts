
//活动分区

class ActivityAreaPart{
    /**
     * 区域吸引力Attraction 
     * 最大值为1
     */
    public A: number;
    /**
     * 区域额定容量max count 
     */
    public MC: number;
    /**
     * 现场人数
     */
    public X: number;
    /**
     * 每分钟人数增加量add count 
     * 0.03*(X-n)*(random*(0.5,1))
     */
    public AC: number;
    /**
     * 每分钟人数离开量leave count 
     * 0.01*|X-n|*(random*(0.5,1))
     */
    public LC: number;
    /**
     * 事故发生数event count 
     */
    public EC: number;

    

}