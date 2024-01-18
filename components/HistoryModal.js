
export default{
    props:{
        product: {
          type: Object,
          default () { return {} }
        }
      },
    data(){
        return{
            histroyRecord: [
                {
                    id: 1,
                    number: "附件序號 021755700254",
                    title: "GCMS-TQ8040 NX",
                    date: "2023-07-06",
                    start: "13:00",
                    end: "17:30",
                    content:
                        "1. 拆卸 ionSORCE及Iens清潔 2. ion SOURCE保 3. 拆卸 ionSORCE及Iens清潔 4. ionSOURCE保 5. ion SOURCE保 6. 拆卸 ionSORCE及Iens清潔 7. 拆卸ionSORCE及Iens清潔",
                    person: "林坤星",
                },
                {
                    id: 2,
                    number: "附件序號 021755700254",
                    title: "GCMS-TQ8040 NX",
                    date: "2023-07-06",
                    start: "13:00",
                    end: "17:30",
                    content:
                        "1. 拆卸 ionSORCE及Iens清潔 2. ion SOURCE",
                    person: "林坤星",
                },
            ],

        }
    },
    template:` <div
    class="modal fade"
    id="historyModal"
    tabindex="-1"
    aria-labelledby="historyModalLabel"
    aria-hidden="true"  ref="modal"
>
    <div class="modal-dialog modal-xl">
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
                    <h5 class="modal-title" id="historyModalLabel">歷史維修紀錄</h5>
                    <div class="text-right fs-14 pagination">
                        1-20列 (共5頁)<button type="button"><i class="bi bi-chevron-left ml-4 mr-2"></i></button> <button type="button"></i
                            ><i class="bi bi-chevron-right"></i>
                        </button></div>
                </div>

                <table class="mb-3">
                    <thead>
                        <tr>
                            <th style="width: 10%">儀器序號</th>
                            <th style="width: 20%">機型(如LC-2040)</th>
                            <th style="width: 8%">日期</th>
                            <th style="width: 8%">起</th>
                            <th style="width: 8%">迄</th>
                            <th style="width: 20%">工作內容</th>
                            <th style="width: 10%">執行工程師</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in histroyRecord" :key="item.id">
                            <td data-title="儀器序號">{{item.number}}</td>
                            <td data-title="機型">{{item.title}}</td>
                            <td data-title="日期">{{item.date}}</td>
                            <td data-title="起">{{item.start}}</td>
                            <td data-title="迄">{{item.end}}</td>
                            <td data-title="工作內容">
                                <template v-if="item.content.length>40">
                                    <button
                                        type="button"
                                        class="contentDetailBtn text-left"
                                        data-toggle="modal"
                                        data-target="#contentDetailModal"
                                    >
                                        {{item.content.slice(0, 40)}}...
                                    </button>
                                    <div
                                        class="modal fade"
                                        id="contentDetailModal"
                                        tabindex="-1"
                                        aria-labelledby="contentDetailModalLabel"
                                        aria-hidden="true"
                                        
                                    >
                                        <div class="modal-dialog modal-dialog-scrollable">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="contentDetailModalLabel">
                                                        維修細節
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        class="close"
                                                      data-dismiss="modal"
                                                        aria-label="Close"
                                                       
                                                    >
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">{{item.content}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>{{item.content}}</template>
                            </td>
                            <td data-title="執行工程師">{{item.person}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`,


}