# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  current = []
  longest = 0
  
  s.each_char do |char|
    if current.include?(char)
      longest = [longest, current.size].max
      
      # find out where in the array this letter is repeated
      # and we will now remove everything from the left and continue
      index = current.index(char) + 1
      current = current[index..-1]
    end
    
    current << char
  end
  
  # last iteration could be longest
  [longest, current.size].max
end