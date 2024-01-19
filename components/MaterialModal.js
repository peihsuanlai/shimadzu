export default{
    props:{
        product: {
          type: Object,
          default () { return {} }
        }
      },
    data(){
        return{
            materialList: [
                {
                    isCheck:false,
                    imgUrl: {
                        small: "./frontEndPackage/images/product-sm.jpg",
                        large: "./frontEndPackage/images/product-lg.jpg",
                        alt: "spectrometer",
                    },
                    number: "01",
                    eqip: "液相層析質譜儀 LCMS-8060NX",
                    material:"01361/Simple method creation and batch creation"
                },
                {   
                    isCheck:false,
                    imgUrl: {
                        small: "./frontEndPackage/images/product-sm.jpg",
                        large: "./frontEndPackage/images/product-lg.jpg",
                        alt: "spectrometer",
                    },
                    number: "02",
                    eqip: "液相層析質譜儀 LCMS-8060NX",
                     material:"01361/Simple method creation and batch creation"
                },
            ],
            selectAll: false,

        }
    },
    template:`<div
    class="modal fade"
    id="materialModal"
    tabindex="-1"
    aria-labelledby="materialModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="d-flex align-items-center productInfo mb-3">
                    <div class="img-container mr-3">
                        <img :src="product?.imgUrl?.small" :alt="product?.imgUrl?.alt" />
                    </div>
                    <div>
                        <h4 class="fs-16 mb-2">{{product.title}}</h4>
                        <p class="fs-14 mb-0">主設備序號：{{product.number}}</p>
                        <div class="fs-14">
                            合約日期：
                            <span>{{product.date}}</span>
                            <span class="fs-12 ml-2">合約即將到期</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-end justify-content-between">
                    <h5 class="modal-title" id="materialModalLabel">耗材清單</h5>
                    <div class="text-right fs-14 pagination">
                        1-20列 (共5頁)<button type="button"><i class="bi bi-chevron-left ml-4 mr-2"></i></button> <button type="button"></i
                            ><i class="bi bi-chevron-right"></i>
                        </button></div>
                </div>

                <table class="mb-3">
                    <thead>
                        <tr>
                            <th style="width: 5%"><input type="checkbox" v-model="selectAll" @change="toggleAll"/></th>
                            <th style="width: 15%">圖片</th>
                            <th style="width: 8%">編號</th>
                            <th style="width: 25%">器材名稱</th>
                            <th style="width: 27%">耗材編號/耗材名稱</th>
                            <th style="width: 20%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in materialList" :key="item.number">
                            <td data-title="選取"><input type="checkbox" v-model="item.isCheck"/></td>
                            <td data-title="圖片">
                                <a :href="item.imgUrl.large" data-lightbox="'pic'+item.number">
                                    <img :src="item.imgUrl.small" :alt="item.imgUrl.alt" />
                                </a>
                            </td>
                            <td data-title="編號">{{item.number}}</td>
                            <td data-title="器材名稱">{{item.eqip}}</td>
                            <td data-title="耗材編號/耗材名稱">
                                {{item.material}}
                            </td>
                            <td class="text-center">
                                <button
                                    type="button"
                                    class="ask-btn"
                                    @click="addToList"
                                >
                                    加入詢價<i class="bi bi-plus"></i>
                                </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <p class="text-center">若無法於此列表中找到欲詢問之耗材，可另於詢問表單中單獨填寫</p>
            </div>
            <div class="modal-footer d-none d-lg-block">
                <button type="button" class="btn w-100" data-dismiss="modal">批次加入清單</button>
            </div>
        </div>
    </div>
</div>`,
methods:{
    addToList(){
        alert("確定加入詢價？");
        this.$emit("emit-num");
    },
    toggleAll() {
        this.materialList.forEach(item => {
          item.isCheck = this.selectAll;
        });
      }
}
}