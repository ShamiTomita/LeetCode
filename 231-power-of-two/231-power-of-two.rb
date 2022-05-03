# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
    if n === 0 
        false 
    end 
    
    if n === 1 
        true 
    end 
    
    power = 1
    while power < n
        power = power * 2
    end 
    
    if power === n 
        true 
    else 
        false 
    end 
end
