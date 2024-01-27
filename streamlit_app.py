import streamlit as st

col1, col2, col3, col4 = st.columns(4)

with col1.expander("Home"):
  st.write("this is a test")

with col2.expander("Water Log"):
  st.write("this is a test")
  
with col3.expander("Food Log"):
  st.write("this is a test")
  
with col4.expander("Exercise Log"):
  st.write("this is a test")
  

# USER INPUT + VARIABLE STORING
weight = st.text_input("Enter some text")

choice = st.number_input(label = "Adjust water", step = 1)
st.image("cup.png")

#BACKGROUND COLOR
[theme]
backgroundColor = “#CBC3E3”