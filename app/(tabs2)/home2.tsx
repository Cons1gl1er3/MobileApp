import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Ionicons as IconType } from '@expo/vector-icons/build/Icons';
import { PieChart } from 'react-native-chart-kit';

interface NavButtonProps {
  icon: keyof typeof IconType.glyphMap;
  label: string;
  isActive: boolean;
}

const NavButton = ({ icon, label, isActive }: NavButtonProps) => (
  <TouchableOpacity className="items-center">
    <Ionicons 
      name={icon} 
      size={24} 
      color={isActive ? "#6366F1" : "#6B7280"} 
    />
    <Text className={`text-xs mt-1 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`}>
      {label}
    </Text>
  </TouchableOpacity>
);

interface CategoryItemProps {
  icon: keyof typeof IconType.glyphMap;
  color: string;
  title: string;
  amount: string;
}

interface TransactionItemProps {
  icon: keyof typeof IconType.glyphMap;
  color: string;
  title: string;
  amount: string;
  isExpense: boolean;
}

const CategoryItem = ({ icon, color, title, amount }: CategoryItemProps) => (
  <View className="flex-row justify-between items-center">
    <View className="flex-row items-center">
      <View style={{ backgroundColor: color }} className="w-8 h-8 rounded-full items-center justify-center">
        <Ionicons name={icon} size={16} color="white" />
      </View>
      <Text className="ml-2 font-medium">{title}</Text>
    </View>
    <Text className="font-bold">€{amount}</Text>
  </View>
);

const TransactionItem = ({ icon, color, title, amount, isExpense }: TransactionItemProps) => (
  <View className="flex-row justify-between items-center bg-gray-50 p-4 rounded-lg">
    <View className="flex-row items-center">
      <View style={{ backgroundColor: color }} className="w-10 h-10 rounded-full items-center justify-center">
        <Ionicons name={icon} size={20} color="white" />
      </View>
      <Text className="ml-3 font-medium">{title}</Text>
    </View>
    <Text className={`font-bold ${isExpense ? 'text-red-500' : 'text-green-500'}`}>
      {isExpense ? '-' : '+'}€{amount}
    </Text>
  </View>
);

const Home2 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (increment: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
  
    // Prevent future months
    if (newDate > new Date()) {
      alert("You cannot select a future month.");
      return;
    }
  
    setCurrentDate(newDate);
    // Fetch data for the new month from your database here
  };

  const categoryData = [
    { name: 'Clothing', amount: 650.0, color: '#9333EA', icon: 'shirt-outline', legendFontColor: '#7F7F7F' },
    { name: 'Leisure', amount: 580.0, color: '#4F46E5', icon: 'game-controller-outline', legendFontColor: '#7F7F7F' },
    { name: 'Entertainment', amount: 500.0, color: '#EC4899', icon: 'film-outline', legendFontColor: '#7F7F7F' },
    { name: 'Health', amount: 250.0, color: '#6366F1', icon: 'medical-outline', legendFontColor: '#7F7F7F' },
  ];

  // Format the data for the pie chart
  const chartData = categoryData.map(item => ({
    name: item.name,
    population: item.amount, // 'population' is the value field in react-native-chart-kit
    color: item.color,
    legendFontColor: item.legendFontColor,
    legendFontSize: 12,
  }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-4 pt-4">
          <Text className="text-2xl font-bold">Home</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Month Selector */}
        <View className="flex-row justify-between items-center px-4 mt-6">
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={20} color="#000" />
            <Text className="text-lg ml-2">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-4" onPress={() => changeMonth(-1)}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeMonth(1)}>
              <Ionicons name="chevron-forward" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity className="ml-4">
              <Ionicons name="menu" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Income & Spending Cards */}
        <View className="flex-row px-4 mt-4 space-x-4">
          <View className="flex-1 bg-green-50 p-4 rounded-lg mr-3">
            <Text className="text-lg font-medium">Income</Text>
            <Text className="text-xl font-bold mt-1">€6500.0</Text>
          </View>
          <View className="flex-1 bg-red-50 p-4 rounded-lg ml-3">
            <Text className="text-lg font-medium">Spending</Text>
            <Text className="text-xl font-bold mt-1">€1980.0</Text>
          </View>
        </View>

        {/* Account Section */}
        <View className="mt-6 px-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold">Account</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            <View className="flex-row space-x-4 w-full">
              {/* Example Account Cards */}
              <View className="w-40 bg-green-50 p-4 rounded-lg mr-5">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-medium">E-Wallet</Text>
                  <Ionicons name="wallet-outline" size={24} color="#000" />
                </View>
                <Text className="text-xl font-bold mt-2 text-green-600">€4520.0</Text>
              </View>
              <View className="w-40 bg-green-50 p-4 rounded-lg mr-5">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-medium">Cash</Text>
                  <Ionicons name="cash-outline" size={24} color="#000" />
                </View>
                <Text className="text-xl font-bold mt-2 text-green-600">€4520.0</Text>
              </View>
              <View className="w-40 bg-green-50 p-4 rounded-lg mr-5">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-medium">Card-xxx</Text>
                  <Ionicons name="card-outline" size={24} color="#000" />
                </View>
                <Text className="text-xl font-bold mt-2 text-green-600">€0.0</Text>
              </View>
              {/* Add more account cards as needed */}
            </View>
          </ScrollView>
        </View>

        {/* Categories Section */}
        <View className="mt-6 px-4 h-60">
          <Text className="text-xl font-bold">Categories</Text>
          <View className="flex-row mt-4 h-48">
            <View className="w-1/2 items-center justify-center">
              <PieChart
                data={chartData}
                width={150}
                height={150}
                chartConfig={{
                  backgroundColor: 'transparent',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="0"
                absolute
                hasLegend={false}
                center={[30, 0]} // offset to center the chart properly
              />
              <Text className="mt-1 font-bold pr-5">€1980.0</Text>
            </View>
            <View className="w-1/2 justify-between py-4">
              {categoryData.map((item, index) => (
                <CategoryItem 
                  key={index} 
                  icon={item.icon as keyof typeof IconType.glyphMap} 
                  color={item.color} 
                  title={item.name} 
                  amount={item.amount.toString()} 
                />
              ))}
            </View>
          </View>
        </View>

        {/* Budget Section */}
        <View className="mt-6 px-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold">Budgets</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          
          <View className="mt-4 bg-green-50 p-4 rounded-lg">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-medium">November Budget</Text>
              <Text className="text-xl font-bold">€1980.0</Text>
            </View>
            <View className="mt-2">
              <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <View className="h-full w-4/5 bg-orange-400" />
              </View>
              <Text className="text-sm text-gray-600 mt-1">€1980.0 of €2500.0</Text>
              <Text className="text-sm text-gray-600">79.20 %</Text>
            </View>
          </View>
        </View>

        {/* Transaction Section */}
        <View className="mt-6 px-4 pb-20">
          <Text className="text-xl font-bold">Transaction</Text>
          <View className="mt-4 space-y-4">
            <TransactionItem
              icon="medical-outline"
              color="#6366F1"
              title="Health"
              amount="250.0"
              isExpense
            />
            {/* Add more transactions as needed */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home2;