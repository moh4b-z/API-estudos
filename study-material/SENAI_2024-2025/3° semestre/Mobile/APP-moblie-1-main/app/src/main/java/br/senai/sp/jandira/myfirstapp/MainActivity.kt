package br.senai.sp.jandira.myfirstapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.senai.sp.jandira.myfirstapp.ui.theme.MyFirstAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyFirstAppTheme {
                Row (
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(height = 500.dp)
                        .background(color = Color(0xFF464646))
                ){
                    Column (
                        modifier = Modifier
                            .padding(start = 12.dp, end = 12.dp, top = 32.dp)
                            .background(color = Color(0xFF000000))
                    ){
                        Text(
                            text = "SENAI",
                            fontSize = 48.sp,
                            color = Color(0xFFA06CD2)
                        )
                        Text(
                            text = "SESI",
                            fontSize = 48.sp,
                            color = Color(0xFFD8B0FF)
                        )
                    }
                    Column (
                        modifier = Modifier
                            .padding(start = 12.dp, end = 12.dp)
                            .background(color = Color(0xFF2A2A2A))
                    ){
                        Text(
                            text = "SENAI",
                            fontSize = 48.sp,
                            color = Color(0xFFA06CD2)
                        )
                        Text(
                            text = "SESI",
                            fontSize = 48.sp,
                            color = Color(0xFFD8B0FF)
                        )
                    }
                    Button(onClick = {}) { }
                }
            }
        }
    }
}
