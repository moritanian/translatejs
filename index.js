window.onload = function(){
	Vue.component('translate-component', {

		template: `
			<div class='translate-component'>
				<textarea class='input-text-area' 
					v-model="inputText" placeholder="...">
				</textarea>
				<button v-on:click='clearButton'> clear </button>
				<button v-on:click='updateButton'> update </button>
				<div class=output-text-area>
					{{outputText}}
				</div>
			</div>
		`,
		data: function(){
			return {
				inputText: '',
				needUpdate: false
			}
		},

		computed: {
			outputText: function(){
				if(this.needUpdate){
					var i = document.querySelectorAll("iframe")[0];
					var doc = i.contentWindow.document;
					var b = doc.querySelectorAll("button")[0];

					b.click();
				}else{
					this.updateTranslation();
					return;
				}
				this.needUpdate = false;
				return this.inputText;
			}
		},
		methods:{
			clearButton: function(){
				this.inputText = '';
			},
			updateButton: function(){
				//this.inputText += '\n';
				this.updateTranslation();
			},
			updateTranslation: function(){
				var i = document.querySelectorAll("iframe")[0];
				var doc = i.contentWindow.document;
				var b = doc.querySelectorAll("button")[3];

				b.click();
				setTimeout(()=>{
					this.needUpdate = true;
				}, 500); 

			}
		}

	});
	
	new Vue({
		el: '#translate'
	})


}

