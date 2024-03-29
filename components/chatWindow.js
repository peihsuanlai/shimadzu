export default {
    data() {
        return {
            isModalActive: false,
            chatService: [
                {
                    id: 1,
                    title: "儀器叫修",
                    imgUrl: "./frontEndPackage/images/dialog-icon1.png",
                    alt: "fix",
                    path: "./other.html?selectedService=線上叫修",
                },
                {
                    id: 2,
                    title: "現有儀器操作實驗問題",
                    imgUrl: "./frontEndPackage/images/dialog-icon2.png",
                    alt: "clipboard",
                    path: "./instruments.html",
                },
                {
                    id: 3,
                    title: "產品/分析技術諮詢",
                    imgUrl: "./frontEndPackage/images/dialog-icon3.png",
                    alt: "clipboard",
                    path: "./other.html?selectedService=技術詢問",
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
            isBusinessHours: null,
            modalContent: "A",
            messageTopic: "",
            messages: [],
            newMessage: "",
            attatchedFile: null,
            imagePreview: [],
        };
    },
    methods: {
        startChat() {
            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const currentMinutes = currentDate.getMinutes();

            // 定義營業時間的開始和結束時間
            const businessHoursStart = 9;
            const businessHoursEnd = 17;
            const businessMinutesEnd = 30;

            // 判斷是否在早上9:00 到下午5:30 之間
            const isBusinessHours =
                (currentHour > businessHoursStart && currentHour < businessHoursEnd) ||
                (currentHour === businessHoursStart && currentMinutes >= 0) ||
                (currentHour === businessHoursEnd && currentMinutes <= businessMinutesEnd);
            this.isBusinessHours = isBusinessHours;
            if (this.isBusinessHours) {
                this.modalContent = "B";
            } else {
                this.modalContent = "C";
            }
        },
        switchModalContent(type) {
            this.modalContent = type;
        },
        getTimeStamp() {
            const now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, "0");
            const day = now.getDate().toString().padStart(2, "0");
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            return `${year}/${month}/${day} ${hours}:${minutes}`;
        },
        sendMessage() {
            let newMessageObj;
            const input = this.$refs.fileUpload;
            if (this.newMessage.trim() !== "") {
                newMessageObj = {
                    id: this.messages.length + 1,
                    text: this.newMessage,
                    isUser: true,
                    timestamp: this.getTimeStamp(),
                };
            } else if (input.files.length > 0) {
                const lastImgIndex = input.files.length - 1;
                this.attatchedFile = this.$refs.fileUpload.files[lastImgIndex];
                newMessageObj = {
                    id: this.messages.length + 1,
                    file: this.attatchedFile,
                    isUser: true,
                    image: window.URL.createObjectURL(this.attatchedFile),
                    timestamp: this.getTimeStamp(),
                };

                console.dir(this.$refs.fileUpload);
            }
            this.messages.push(newMessageObj);
            this.newMessage = "";
            this.attatchedFile = null;
            input.value = "";
        },

    },
    template: `<div>
    <button
    type="button"
    class="dialog-btn"
    data-toggle="modal"
    data-target="#dialogModal"
    :class="{ 'active': isModalActive }"
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
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title d-flex align-items-center mb-0" id="dialogModalLabel">
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
            <div class="topicArea" v-if="modalContent==='D'">{{messageTopic}}</div>
            <div class="modal-body">
                <template v-if="modalContent==='A'">
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
                </template>

                <template v-else-if="modalContent==='B'">
                    <div class="ask-topic">
                        <p>請輸入詢問的主題：</p>
                        <div class="d-flex align-items-center">
                            <label for="message-topic" class="mb-0">
                                <input
                                    type="text"
                                    id="message-topic"
                                    v-model.lazy="messageTopic"
                                    @keyup.enter="switchModalContent('D')"
                                />
                            </label>
                            <button type="button" class="send-btn" :disabled="!this.messageTopic.trim()" @click="switchModalContent('D')">
                                <i class="bi bi-send-fill"></i>
                            </button>
                        </div>
                        
                    </div>
                </template>
                <template v-else-if="modalContent==='C'">
                    <div
                        class="d-flex flex-column notInServiceAlert align-items-center justify-content-center"
                    >
                        <i class="bi bi-exclamation-circle"></i>
                        <p class="text-center text-darkBlack">
                            現在非客服時間<br />專人將在營業時間內立刻回覆
                        </p>
                        <span class="fs-14 mb-5">客服營業時間：週一到週五(9:00am-5:30pm)</span>
                        <button type="button" @click="switchModalContent('B')">了解</button>
                    </div>
                </template>
                <template v-else-if="modalContent==='D'">
                    <div>
                        <div class="warning" v-if="!isBusinessHours">
                            <p class="font-weight-bold mb-0">現在非客服時間，專人將在營業時間內回覆</p>
                            <p class="mb-0">客服營業時間：週一到週五(9:00am-5:30pm)</p>
                        </div>

                        <div class="d-flex align-items-center cs-message first">
                            <div class="mr-2">
                                <img src="./frontEndPackage/images/avatar.png" alt="" />
                            </div>

                            <div class="d-flex flex-column">
                                <span class="fs-14">島津線上客服</span>
                                <span class="text-darkBlack content">您好，請問需要什麼服務？</span>
                                <span class="grey-text fs-12">{{ getTimeStamp() }}</span>
                            </div>
                        </div>

                        <div
                            v-for="message in messages"
                            :key="message.id" class="mt-2"
                            :class="[message.isUser ? 'user-message' : 'cs-message']"
                        >
                            <div class="mr-2" v-if="!message.isUser">
                                <img src="./frontEndPackage/images/avatar.png" />
                            </div>
                            <div class="d-flex flex-column">
                                <template v-if="message.file">
                                    <img :src="message.image" width="150"/> 
                                </template>
                               <template v-if="message.text">
                                    <span class="text-darkBlack content">{{ message.text }}</span>
                               </template>   
                                <span class="grey-text fs-12">{{ message.timestamp }}</span>
                            </div>
                        </div>

                        
                    </div>
                </template>
            </div>
            <template v-if="modalContent==='D'">
                <div class="modal-footer">
                  
                    <div class="attatch-btn">
                            <label for="file-attatch" class="mb-0">
                            <i class="bi bi-paperclip"></i>
                                <input
                                    type="file"
                                    id="file-attatch"
                                    class="d-none" @change="sendMessage"
                                    ref="fileUpload" accept=".jpg, .jpeg, .png"
                                />
                            </label>
                           
                        </div>
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="1"
                        placeholder="輸入訊息"
                        v-model="newMessage"
                        @keyup.enter="sendMessage"
                    ></textarea>
                    <button type="button" :disabled="!this.newMessage.trim()" class="send-btn" @click="sendMessage">
                        <i class="bi bi-send-fill"></i>
                    </button>
                </div>
            </template>
        </div>
    </div>
</div>
    
    
    
    
    </div>   `,

    mounted() {
        $("#dialogModal").on("show.bs.modal", () => {
            this.isModalActive = true;
        });

        $("#dialogModal").on("hide.bs.modal", () => {
            this.isModalActive = false;
            this.modalContent = "A";
            this.messageTopic = "";
            this.messages = [];
        });
    },
};
