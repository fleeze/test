const tree = [
    {
        name: '11',
        children: [
            {
                name: '11-1'
            },
            {
                name: '11-2'
            }
        ]
    },
    {
        name: '12-1',
    }
]
const text = '11-1'

function genList(tree) {
    const list = []
    const getList = (tree, prePath) => {
        tree.forEach(subTree => {
            list.push({ ...subTree, path: prePath.concat(subTree.name) })
            if (subTree.children) {
                getList(subTree.children, subTree.path || [subTree.name])
            }
        })
    }
    getList(tree, [])
    return list
}

const res = genList(tree).filter(item => item.path.some(name => name.includes(text)))

// console.log('res', res)


function filter(array, text) {
    const getNodes = (result, object) => {
        if (object.name.includes(text)) {
            result.push(object);
            return result;
        }
        if (Array.isArray(object.children)) {
            const children = object.children.reduce(getNodes, []);
            if (children.length) result.push({ ...object, children });
        }
        return result;
    };

    return array.reduce(getNodes, []);
}

console.log(filter(tree, '1-2'))
