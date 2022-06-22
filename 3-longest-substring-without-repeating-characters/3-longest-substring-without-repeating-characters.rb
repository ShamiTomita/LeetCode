# @param {String} s
# @return {Integer}
def length_of_longest_substring(str)
# Helpful reading:
# https://labuladong.gitbook.io/algo-en/iii.-algorithmic-thinking/slidingwindowtechnique
  window = {}
  left = 0
  answer = []

  str.chars.each_with_index do |char, right|
    if window.key?(char)
      # We need the furthest left instance
      # i.e. "abba" the last a would make left 1 but it should be
      #      based on b
      left = [left, window[char] + 1].max 
    end
    # Set the char index in our window for left varaible usage
    window[char] = right

    # We're adding one here because arrays start with 0
    answer << (right + 1) - left
  end
  
  # We're using max here because we saw 8ms speed boost
  #  instead of maxing based on current answer and new answer
  answer.max || 0
end