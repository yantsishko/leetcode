/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = Array.from(Array(numCourses), ()  => [])

    let ranks = Array(numCourses).fill(0)

    for (let [u, v] of prerequisites) {
        graph[v].push(u)
        ++ranks[u]
    }

    let queue = []

    ranks.forEach((r, i) => {
        if (!r) {
            queue.push(i)
        }
    })

    while (queue.length) {
        let shifted = queue.shift()
        numCourses = numCourses - 1
        let neighbours = graph[shifted]

        neighbours.forEach(neigh => {
            ranks[neigh] = ranks[neigh] - 1
            if (!ranks[neigh]) {
                queue.push(neigh)
            }
        })
    }

    return !numCourses
};