<template>
    <div class="company-invoice">

        <div class="company-details">
            <img :src="require('@/assets/logo.png')"/>
             <div>
               <h2>{{ companyName }}</h2>
               <p>Soshanguve, Pretoria, Aubrey Matlakala road, 0152</p>
               <p>0713865829</p>
             </div>
        </div>

        <div class="invoice-body">
            <h3>INVOICE</h3>
            <form>
                <label>Date: </label>
                <input type="date" placeholder="Enter ivoice date">

                <div class="external-company-details">
                    <div id="bill-to">
                        <h3>BILL TO</h3>
                        <label>Company Name: </label>
                        <input type="text" placeholder="Enter company name">
                        <label>Company's Address</label>
                        <input type="text" placeholder="Address, City, ST, ZIP Code">
                    </div>

                    <div id="project-details">
                        <h3>FOR</h3>
                        <textarea name="product-desc" id="" placeholder="Product Description"></textarea>
                    </div>
                </div>
            </form>
            
            <!--Invoice Table-->
            <table>
                <thead>
                    <tr>
                        <th>ITEM DESCRIPTION</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in items" :key="item">
                        <td><input type="text" v-model="item.description" required></td>
                        <td><input type="number" v-model="item.amount" required></td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td style="text-align: right;">
                            <strong>Subtotal:</strong>
                        </td>
                    </tr>
                    <tr>
                        {{ subtotal }}
                    </tr>
                </tfoot>
            </table>
            <div>
                <button type="submit" @click="addRow">Add</button>
                <button type="submit" @click="deleteRow">Delete</button>
                <button type="submit" @click="sendInvoice">Send</button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: "InvoiceComp",
    data(){
        return{
            companyName: "SmartCru Tech",
            items: [
                { description: '', amount: null}
            ],
            newItems: { description: '', amount: null}
        }
    },
    methods: {
        addRow(){
            if(!this.newItems){
                console.log("Please fill all space")
            }
            else{
                this.items.push(this.newItems)
                this.newItems = { description: '', amount: ''}
            }
        },
        deleteRow(){
            this.items.pop(this.newItems)
            this.newItems = { description: '', amount:''}
        }
    }
}
</script>
<style scoped>
.company-invoice{
    border: 2px solid  #ddd;
}
.company-details{
    display: flex;
    margin: 5px auto;
    padding: 5px;
}
img{
    height: 20vh;
    width: 20vh;
    margin: 5px 10px;
}
.invoice-body{
    margin: 10px;
}
.invoice-body{
    display: grid;
    margin: 10px;
    padding: 10px;
}
.external-company-details{
    display: flex;
    margin: 10px;
    padding: 10px;
}
#bill-to, #product-disc{
    width: 50%;
    border: 2px dashed #ddd;
    display:grid;
    margin: 10px;
    padding: 10px;
}

#project-details{
    width: 50%;
    border: 2px dashed #ddd;
    padding: 10px;
    margin: 10px;
}

#project-details textarea{
    height: 60%;
    width: 100%;
    margin: 0 auto;
}

#bill-to label, input{
    margin: 5px;
}
#bill-to input{
    width: 90%;
    padding: 10px;
}

form input{
    padding: 5px;
}
tbody input{
    height: 20px;
}
table{
    border: solid 2px #ddd;
    border-collapse: collapse;
    margin-top: 30px;
}
table th{
    border: solid 1px #ddd;
    padding: 4px;
}
table th, td{
    background-color:aquamarine;
}
tbody input{
    height: 20px;
    margin: 0;
    width: 98%;
}

@media only screen and (max-width: 960px){
    
    .external-company-details{
        display: grid;
        padding-bottom: 60px;
    } 
    #project-details{
        height: 100%;
        padding: 10px;
    } 
    #bill-to, #project-details{
        width: 90%;
        margin: 10px auto;
    }
}
</style>