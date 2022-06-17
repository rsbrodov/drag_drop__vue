
import $ from "jquery";
var mixin = {
    data() {
        return {
            Dictionary: [
                {
                    type: 'int',
                    name: 'Целочисленный'
                },
                {
                    type: 'varchar',
                    name: 'Текст'
                },
                {
                    type: 'float',
                    name: 'Нецелое число'
                },
                {
                    type: 'boolean',
                    name: 'Булеан'
                },
            ],
            typeSize: [
                {
                    type: 'int',
                    size: 11
                },
                {
                    type: 'varchar',
                    size: 255
                },
                {
                    type: 'float',
                    size: 11
                },
                {
                    type: 'boolean',
                    size: 11
                },
                {
                    type: 'datetime',
                    size: ''
                },
                {
                    type: 'text',
                    size: ''
                },
            ],
        }
    },
    filters: {
        get_size: function (dictionary_id) {
            let find;
            let typeSize = [
                {
                    type: 'int',
                    size: 11
                },
                {
                    type: 'varchar',
                    size: 255
                },
                {
                    type: 'float',
                    size: 11
                },
                {
                    type: 'boolean',
                    size: 11
                },
                {
                    type: 'datetime',
                    size: ''
                },
                {
                    type: 'text',
                    size: ''
                },
            ];
            $.each(typeSize,function(index_item,item) {
                if(dictionary_id === item.type){
                    find = item.size;
                }
            });
            return find;
        },
    },
};
export default mixin