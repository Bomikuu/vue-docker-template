<template>
  <div class="main-container">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">List of Inventory Transactions</h3>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th style="width: 10px">#</th>
              <th>Product Name</th>
              <th>Date</th>
              <th style="width: 40px">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Chicken Parmesan</td>
              <td>
                2020/07/21
              </td>
              <td><span class="badge bg-danger">20</span></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Chicken Parmesan with Fries</td>
              <td>
                2020/07/21
              </td>
              <td><span class="badge bg-danger">20</span></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Roasted Chicken BBQ</td>
              <td>
                2020/07/21
              </td>
              <td><span class="badge bg-danger">20</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.card-body -->
      <div class="card-footer clearfix">
        <ul class="pagination pagination-sm m-0 float-right">
          <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
        </ul>
      </div>
    </div>
    <div class="add-product-btn" @click="addNewInventory">
      <img src="@/assets/images/plus_white.svg" />
    </div>
    <AddRecord
      v-if="showInventoryModal"
      :show-dialog="showInventoryModal"
      :toggle-modal="toggleInventoryModal"
      :item-detail="currentProduct"
    ></AddRecord>
  </div>
</template>

<script>
import AddRecord from "@/components/forms/addrecord.vue";

export default {
  components: {
    AddRecord,
  },
  data: () => {
    return {
      showInventoryModal: false,
      currentInventory: null,
    };
  },
  computed: {
    getInventoryList() {
      return this.$store.state.inventory.inventoryList;
    },
  },
  methods: {
    toggleInventoryModal() {
      this.showInventoryModal = !this.showInventoryModal;
    },
    addNewInventory() {
      this.currentInventory = null;
      this.toggleInventoryModal();
    },
  },
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  //to be changed
  height: 80vh;
}

.add-product-btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 2%;
  padding: 1em;
  background: #007bff;
  border-radius: 50%;

  img {
    width: 30px;
    height: 30px;
  }
}
</style>
