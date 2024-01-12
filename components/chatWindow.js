export default{
    data(){
        return{ 
            isModalnActive: false,
            chatActive: true,
            chatService: [
                {
                    id: 1,
                    title: "儀器叫修",
                    imgUrl: "./frontEndPackage/images/dialog-icon1.png",
                    alt: "fix",
                    path: "###",
                },
                {
                    id: 2,
                    title: "現有儀器操作實驗問題",
                    imgUrl: "./frontEndPackage/images/dialog-icon2.png",
                    alt: "clipboard",
                    path: "###",
                },
                {
                    id: 3,
                    title: "產品/分析技術諮詢",
                    imgUrl: "./frontEndPackage/images/dialog-icon3.png",
                    alt: "clipboard",
                    path: "###",
                },
                {
                    id: 4,
                    title: "其他需求",
                    imgUrl: "./frontEndPackage/images/dialog-icon4.png",
                    alt: "clipboard",
                    path: "###",
                    detail: "營業時間為週一到週五(9:00am-5:30pm)",
                },
            ],
        }
    },
    methods: {
        startChat(){
            this.chatActive = !this.chatActive
        }
    },
    template:`<div>
    <button
                type="button"
                class="dialog-btn"
                data-toggle="modal"
                data-target="#dialogModal"
                :class="{ 'active': isModalnActive }"
            >
                <i class="bi bi-headset headset-icon"></i>
            </button>

            <div
                class="modal fade"
                id="dialogModal"
                tabindex="-1"
                aria-labelledby="dialogModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title d-flex align-items-center" id="dialogModalLabel">
                                <span class="dialog-icon-container mr-2 mr-sm-3"
                                    ><i class="bi bi-headset headset-icon"></i
                                ></span>
                                <div class="d-flex flex-column">
                                    <h3 class="fs-16 mb-0 text-black">島津線上客服</h3>
                                    <span class="grey-text fs-14">客服營業時間: 週一到週五(9:00am-5:30pm)</span>
                                </div>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="text-lightBlack">有什麼需要幫忙的嗎？</p>
                            <ul class="list-unstyled">
                                <li v-for="item in chatService" :key="item.id">
                                    <a
                                        v-if="!item.detail"
                                        :href="item.path"
                                        class="text-black d-flex align-items-center"
                                    >
                                        <img :src="item.imgUrl" :alt="item.alt" class="mr-2" />{{item.title}}
                                    </a>
                                    <a
                                        v-else
                                        :href="item.path"
                                        class="text-black d-flex align-items-center"
                                        @click="startChat"
                                    >
                                        <img :src="item.imgUrl" :alt="item.alt" class="mr-2" />
                                        <div>
                                            {{item.title}}<br /><span class="grey-text fs-14">{{item.detail}}</span>
                                        </div>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="attatch-btn" :disabled="chatActive">
                                <i class="bi bi-paperclip"></i>
                            </button>
                            <textarea
                                name="message"
                                id=""
                                cols="30"
                                rows="1"
                                placeholder="輸入訊息"
                                :disabled="chatActive"
                            ></textarea>
                            <button type="button" class="send-btn" :disabled="chatActive">
                                <i class="bi bi-send"></i>
                            </button>
                          
                        </div>
                    </div>
                </div>
            </div>
    
    
    
    
    </div>   `,
    mounted() {
        $("#dialogModal").on("show.bs.modal", () => {
            this.isModalnActive = true;
        });

        $("#dialogModal").on("hide.bs.modal", () => {
            this.isModalnActive = false;
        });
    },
}