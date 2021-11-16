const price=[10,12,14,16,18,20];
const pri=[...price,22,24];

function Exp(){
    return(
        <div>
            <div class="uperer">
                <span>menu</span>
                <span>have</span>
            </div>
            <div>
                <h2>{price[2]}</h2>
            </div>
        </div>
    );
}

export default Exp;
