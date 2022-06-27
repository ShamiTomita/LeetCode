/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
    const stack = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1]
        const curr = asteroids[i]
        
        if (!stack.length || last < 0 || curr > 0) {
            // stack is empty and last and curr not colliding
            stack.push(curr)
        } else if (last + curr === 0) {
            // last and curr collide and cancel each other out
            stack.pop()
        } else if (Math.abs(last) < Math.abs(curr)) {
            // last and curr collide and last is smaller
            stack.pop()
            i--
        }
    }
    
    return stack
}