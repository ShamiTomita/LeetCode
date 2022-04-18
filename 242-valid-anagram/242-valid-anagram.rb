# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false unless s.length == t.length
    
    s_array = s.split('')
    t_array = t.split('')
    fq_counter1 = s_array.tally
    fq_counter2 = t_array.tally
    
   fq_counter1 == fq_counter2
end 
